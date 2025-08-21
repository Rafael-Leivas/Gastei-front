import { Table, TableCaption } from "@/Components/ui/table";

import TransactionBody from "./TransactionBody";
import TransactionHeader from "./TransactionHeader";
import TransactionFooter from "./TransactionFooter";

const TransactionTable = () => {
  return (
    <>
      <div className=" bg-accent border-2 rounded-2xl p-8">
        <Table>
          <TableCaption>Transações financeiras.</TableCaption>
          <TransactionHeader />
          <TransactionBody />
          <TransactionFooter />
        </Table>
      </div>
    </>
  );
};

export default TransactionTable;
