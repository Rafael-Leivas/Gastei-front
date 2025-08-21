import { formatterValue } from "@/utils/Formatters";

import { TableCell, TableRow, TableFooter } from "@/Components/ui/table";

const TransactionFooter = () => {
  
//     const totalTable = transactions.reduce(
//     (sum, transaction) => sum + transaction.value,
//     0
//   );

    const totalTable = 1000

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={4}>Total</TableCell>
        <TableCell className="w-[120px] text-left">
          {formatterValue(totalTable)}
        </TableCell>
        <TableCell className="w-[50px]"></TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default TransactionFooter;
