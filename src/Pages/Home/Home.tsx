import { Button } from "@/Components/ui/button";
import { Dialog, DialogTrigger } from "@/Components/ui/dialog";
import { useState } from "react";
import TransactionTable from "./components/Table/TransactionTable";
import AddNewItem from "./components/AddNewItem/AddNewItem";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openAddTransactionModal = () => {
    console.log("Open modal to add transaction");
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto pt-20">
          <div className="flex justify-end">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={openAddTransactionModal}
                  variant="link"
                  className="cursor-pointer text-accent mb-2"
                >
                  + Adicionar nova transação
                </Button>
              </DialogTrigger>
              <AddNewItem />
            </Dialog>
          </div>
          <TransactionTable />
        </div>
      </div>
    </>
  );
};

export default Home;
