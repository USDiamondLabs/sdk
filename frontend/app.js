let provider;
let signer;
let contract;

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [
  "function balanceOf(address owner) view returns (uint256)"
];

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();

    document.getElementById("account").innerText =
      "Connected: " + await signer.getAddress();

    contract = new ethers.Contract(contractAddress, abi, signer);
  }
}

async function getBalance() {
  const address = await signer.getAddress();
  const balance = await contract.balanceOf(address);

  document.getElementById("balance").innerText =
    "Balance: " + ethers.formatUnits(balance, 18);
}
