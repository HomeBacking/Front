import React, { createRef, useContext, useState } from "react";
import AccountContext from "../../../../../../context/accountContext/AccountContext";
import { getDate } from "../../../../../../services/commonFunctions/getDate/getDate";
import { Button } from "../../../../../../theme/buttons/buttons";
import { Hr } from "../../../../../../theme/hr/hr";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../../../theme/paragraph/paragraph";
import Dropdown from "../../../../../common/dropdown/Dropdown";
import { Loader } from "../../../../../common/loader/Loader";
import { SecondaryNav } from "../../../../../common/navs/secondaryNav/SecondaryNav";
import { TransferencePopup } from "../../../../../common/popup/transferencePopup/TransferencePopup";
import {
  AccountContainer,
  AccountContent,
  AmountBox,
  AmountContent,
  AmountInput,
  MotiveContainer,
  TransactionContent,
  TransactionForm,
  MotiveInput,
} from "./styleTransferenceForm";

export const TransferenceForm = ({ children, shortNavText, largeNavText }) => {
  const [amount, setAmount] = useState({ amount: "" });
  const [motive, setMotive] = useState({ motive: ""});
  const [buttonIsDisable, setButtonIsDisable] = useState(true);
  const ref = createRef();
  console.log(amount);
  console.log(motive);
  const { 
    accountNumber, 
    currency,
    balance,
    bringCurrentAccount,
    allAccountsByUser, 
    makeTransference,
    transferenceLoader,
    searchUserName,
    searchUserLastName,
    successTransference
  }  = useContext(AccountContext);

  const handleKeyUp = () => {
    (amount.amount.length !== 0 && motive.motive.length !== 0)
      ? setButtonIsDisable(false)
      : setButtonIsDisable(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const reg = /([0-9][.]{0,1})$/g;

    const test = reg.test(value);

    e.target.value === "" && setAmount({ amount: "" });

    test && setAmount({ ...amount, [e.target.name]: e.target.value });
  };

  const handleMotiveChange = (e) =>{
    console.log(e.target.value)

    setMotive({...motive, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    makeTransference(motive.motive,amount.amount);
  };

  return (
    <>
      <SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
      <TransactionForm onSubmit={handleSubmit}>
        <TransactionContent>
          <AmountBox>
            <AmountContent>
              <AmountInput
                type="text"
                name="amount"
                autoComplete="off"
                placeholder="00.00"
                value={amount.amount}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
              />

              <ParagraphMedium3>Monto a enviar</ParagraphMedium3>
            </AmountContent>
            <MotiveContainer>
                <Hr/>
                <MotiveInput 
                type="text"
                placeholder="Agregar motivo"
                name="motive"
                value={motive.motive}
                onChange={handleMotiveChange}
                onKeyUp={handleKeyUp}
                />
              </MotiveContainer>
          </AmountBox>
          <AccountContainer>
            <AccountContent>
              <ParagraphSemibold2>Cuenta de cargo</ParagraphSemibold2>
              <Dropdown 
              accountNumber={accountNumber} 
              currency={currency} 
              balance={balance} 
              allAccountsByUser={allAccountsByUser} 
              bringCurrentAccount={bringCurrentAccount}
              />
            </AccountContent>
            <AccountContent>
              <ParagraphSemibold2>Cuenta de destino</ParagraphSemibold2>
              {children}
            </AccountContent>
          </AccountContainer>
            <Button
              ref={ref}
              className={`${buttonIsDisable === true ? "disable" : ""}`}
              disabled={buttonIsDisable}
              type="submit"
            >
              {transferenceLoader ? <Loader circleColor="#fff"/> : "Confirmar transferencia"}
            </Button>
           <TransferencePopup 
           open={successTransference} 
           amount={amount.amount}
           name={searchUserName}
           lastName={searchUserLastName}
           >
           </TransferencePopup>
        </TransactionContent>
      </TransactionForm>
    </>
  );
};
