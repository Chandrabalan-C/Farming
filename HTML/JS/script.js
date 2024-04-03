// Contract addresses and ABIs
const GovernmentSchemesAddress = "0x250e705303CE7E71729a62492213B194BC1570C5";
const GovernmentSchemesABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_interestRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rebate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_expiryTimestamp",
				"type": "uint256"
			}
		],
		"name": "addScheme",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "loanId",
				"type": "uint256"
			}
		],
		"name": "LoanValidated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "removeExpiredSchemes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "SchemeAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "SchemeExpired",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanId",
				"type": "uint256"
			}
		],
		"name": "validateLoan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getScheme",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "schemes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "interestRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rebate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryTimestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const FarmerLoansAddress = "0x43de06f63203442bacc394497104b002c728F2BF";
const FarmerLoansABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "loanId",
				"type": "uint256"
			}
		],
		"name": "LoanValidated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "SchemeAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "SchemeExpired",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_interestRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rebate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_expiryTimestamp",
				"type": "uint256"
			}
		],
		"name": "addScheme",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getScheme",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "removeExpiredSchemes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "schemes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "interestRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rebate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryTimestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanId",
				"type": "uint256"
			}
		],
		"name": "validateLoan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// Function to initialize ethers and contracts
async function init() {
    // try {
    //     // Check if MetaMask is installed
    //     if (typeof window.ethereum !== 'undefined') {
    //         await window.ethereum.request({ method: 'eth_requestAccounts' });
    //         window.provider = new ethers.providers.Web3Provider(window.ethereum);
    //         window.signer = provider.getSigner();
    //     } else {
    //         console.error('MetaMask not found');
    //     }

    //     // Initialize contracts
    //     window.GovernmentSchemesContract = new ethers.Contract(GovernmentSchemesAddress, GovernmentSchemesABI, signer);
    //     window.FarmerLoansContract = new ethers.Contract(FarmerLoansAddress, FarmerLoansABI, signer);
    // } catch (error) {
    //     console.error('Error initializing:', error);
    // }
	const Address = document.getElementById("address");
	if(typeof window.ethereum) {
        try{
            window.ethereum.request({method:"eth_requestAccounts"})
            .then((accounts) => {
                console.log(accounts[0]);
				Address.innerhtml = accounts[0];
            })
        }
        catch(err){
            console.error(err);
        }
    }

    else{
        alert("Please Install Metamask!");
    }
}

// Function to handle farmer loan application
async function applyForLoan(schemeId, amount) {
    try {
        const tx = await FarmerLoansContract.applyForLoan(schemeId, amount);
        await tx.wait();
        alert("Loan application submitted successfully!");
    } catch (error) {
        console.error("Error applying for loan:", error);
        alert("Failed to submit loan application. Please try again.");
    }
}

// Function to fetch and display loan schemes for farmers
async function displayLoanSchemes() {
    try {
        const schemeCount = await GovernmentSchemesContract.getSchemeCount();
        const schemesElement = document.getElementById('schemes');
        schemesElement.innerHTML = ''; // Clear existing content
        for (let i = 0; i < schemeCount; i++) {
            const scheme = await GovernmentSchemesContract.getScheme(i);
            const schemeElement = document.createElement('div');
            schemeElement.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <p>Interest Rate: ${scheme.interestRate}% per month</p>
                <p>Rebate: ${ethers.utils.formatEther(scheme.rebate)} ETH</p>
                <button onclick="applyForLoan(${i}, 1000)">Apply for Loan</button>
            `;
            schemesElement.appendChild(schemeElement);
        }
    } catch (error) {
        console.error("Error fetching loan schemes:", error);
    }
}


// Function to initialize page on load
document.addEventListener('DOMContentLoaded', async function() {
    await init(); // Initialize ethers and contracts
    displayLoanSchemes(); // Display loan schemes for farmers
});
