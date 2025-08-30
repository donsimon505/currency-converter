import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

function SettingsCard() {
  const { currentUser } = useAuthStore();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user || !user.email) {
        setMessage("No User found in our system");
        setLoading(false);
        return;
      }

      const cred = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, cred);

      await updatePassword(user, newPassword);

      setMessage({ text: "Password Updated Successfully", type: "success" });

      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/wrong-password") {
        setMessage({ text: "Incorrect old password.", type: "error" });
      } else if (error.code === "auth/weak-password") {
        setMessage({
          text: "New password should be at least 6 characters",
          type: "error",
        });
      } else {
        setMessage({ text: error.message, type: "error" });
      }
    }

    setLoading(false);
  };

  return (
    <>
      <div className="settings-card flex flex-col w-full p-[30px] py-[40px] md:p-[40px] bg-white rounded-xl shadow-xs">
        <form
          className="flex flex-col gap-[42px]"
          onSubmit={handlePasswordChange}
        >
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-3xl lg:text-2xl font-semibold text-blue-600 text-center md:text-left">
              Personal Information
            </h1>
            <div className="flex flex-col gap-[37px]">
              <div className="flex flex-col md:flex-row gap-[37px] md:gap-[50px]">
                <div className="w-full">
                  <label
                    htmlFor="fullname"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value={currentUser.displayName}
                    disabled
                    className="w-full p-[14px] border text-slate-500 border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={currentUser.email}
                    disabled
                    className="w-full p-[14px] border text-slate-500 border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[37px] md:gap-[50px]">
                <div className="w-full">
                  <label
                    htmlFor="old-password"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    Old Password
                  </label>
                  <input
                    type="password"
                    id="old-password"
                    placeholder="Please enter your old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block font-medium text-left text-sm pb-[10px]"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-[14px] border border-slate-400 focus:border-black rounded focus:shadow-sm text-sm md:text-base"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="text-blue-100" />

          {message.text && (
            <p
              className={`text-center md:text-left text-sm ${
                message.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {message.text}
            </p>
          )}

          <div className="float-right w-full">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white text-sm md:text-base w-full md:w-fit md:float-right px-[30px] py-[18px] 
              rounded-md"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SettingsCard;
