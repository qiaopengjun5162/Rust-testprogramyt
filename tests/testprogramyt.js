const anchor = require("@project-serum/anchor"); //  yarn add @project-serum/anchor

const main = async () => {
  console.log("Starting test ...");

  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Testprogramyt;
  const tx = await program.rpc.testFunction();

  console.log("your transaction signature", tx);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();
