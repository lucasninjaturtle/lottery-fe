

const SmatContractAdress3 = '0xef8ac5Fe65d0BB2c9b53eF360f26150fD4B6fB7D'


 export const  abi = [
      {
        inputs: [],
        name: "LotteryManager",
        outputs: [],
        stateMutability: "payable",
        type: "function"
        
      },
      {
        inputs: [],
        name: "enter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
        payable: true,
        gas: 29000000
      },
      {
        inputs: [],
        name: "getPlayers",
        outputs: [
          {
            internalType: "address payable[]",
            name: "",
            type: "address[]"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "manager",
        outputs: [
          {
            internalType: "address payable",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "pickWinner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "players",
        outputs: [
          {
            internalType: "address payable",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ]