import "./Advisor.css";
import { IoWallet } from "react-icons/io5";
import { HiBriefcase } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import ContactBtn from "../Contact-Btn/ContactBtn";

const Advisor = () => {
  return (
    <>
      <div className="advisor">
        <div>
            Advisor Brokerage Details
        </div>
        <div>
            <div>
                <p><IoWallet /></p>
                <p>
                    $49 Billion
                </p>
                <p>
                    Average Assets Under Management
                </p>
            </div>
            <div>
                <p><HiBriefcase /></p>
                <p>
                    $5 million
                </p>
                <p>
                    Average Account Size
                </p>
            </div>
            <div>
                <p><HiUserGroup /></p>
                <p>
                    821,000
                </p>
                <p>
                    Total Number of Accounts
                </p>
            </div>
        </div>
        <div>
            <p>
                Ready to start a conversation? Contact Elizabeth Ross today.
            </p>
            <p>
                <ContactBtn/>
            </p>
        </div>
      </div>
    </>
  )
}

export default Advisor
