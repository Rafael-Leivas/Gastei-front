import { TableHead, TableHeader, TableRow } from "@/Components/ui/table";

const TransactionHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[200px]">Descrição</TableHead>
        <TableHead className="w-[150px] text-center">Tag</TableHead>
        <TableHead className="w-[120px] text-center">Data</TableHead>
        <TableHead className="w-[100px]">Necessário</TableHead>
        <TableHead className="w-[120px] text-left">Valor</TableHead>
        <TableHead className="w-[50px]"></TableHead>{" "}
      </TableRow>
    </TableHeader>
  );
};

export default TransactionHeader;
