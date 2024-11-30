# Eduena

Eduena is a Decentralized Endowment Fund Management platform built on **sUSDe**. It is designed to manage and showcase various projects funded by an endowment fund.

Our platform serves as a hub for initiatives across a wide range of domains, including:

- **Decentralized Science (DeSci)**
- **DAOs**
- **Education**
- **Social Impact**
- And more

Eduena streamlines the processes of project funding, monitoring, and reporting, enabling organizations to manage their endowment funds efficiently and transparently.

## Table of Contents

- [Problems](#problems)
- [Why Invest in Eduena](#why-invest-in-eduena)
- [Key Features](#key-features)
- [How it Works](#how-it-works)
- [Roadmap and Challenges](#roadmap-and-challenges)
- [Demo](#demo)
- [Screenshots](#demo)
- [Technical Details](#technical-details)
- [Team](#team)

## Problems

Endowment Funds are traditionally managed by centralized institutions, which often lack transparency, flexibility, and community involvement. Key problems in the current system include:

- **Limited access and control**: Donors and beneficiaries have minimal say in how funds are managed.
- **Inefficiencies in fund distribution**: Manual processes introduce delays and errors, impacting fund disbursement.
- **High administrative costs**: Centralized intermediaries take a significant portion of fund assets for management.

## Why Invest in Eduena

Eduena is connecting donors, organizations, and beneficiaries transparently and securely. By providing a transparent and efficient platform for project funding and monitoring, we aim to attract more donors and ensure that funds are utilized effectively. Our platform's user-friendly interface and comprehensive features make it an ideal solution for organizations looking to maximize the impact of their endowment funds.

Investing in Eduena means supporting a project that has the potential to drive significant positive change in various sectors, including healthcare, education, technology, and more. Join us in our mission to make a difference through effective endowment fund management.

## Key Features

- **Stake sUSDe**: Stake sUSDe to generate yield for funding community initiatives.
- **Endowment Fund Management**: Securely manage deposits and withdrawals with full transparency.
- **Claim Funds**: Apply for funding via automated, tamper-proof smart contracts.
- **Projects and Initiatives**: Explore funded projects or propose new initiatives for support.
- **Transparency and Governance Dashboard**: Monitor project performance, fund impact, and transactions in real-time with on-chain transparency.

## How It Works

1. **Staking by Donors**  
   Donors stake sUSDe through the Eduena platform. The staked funds are managed as an endowment and invested to generate yield, creating a sustainable resource for funding initiatives.

2. **Fund Distribution Based on Yield**  
   The yield generated from the endowment is distributed to beneficiaries who pass the selection process. This process is automated by smart contracts and follows a predetermined schedule for efficiency and transparency.

3. **Application Process**  
   Beneficiaries register and apply for initiatives through the platform. After completing KYC verification, their applications are processed and verified using smart contracts. Approved beneficiaries receive funds in accordance with the applicable terms.

4. **Reporting and Audit Reports**  
   All transactions and fund usage are transparently displayed on the platform's governance dashboard. Eduena also provides detailed audit reports accessible to donors, ensuring accountability and trust in fund management.

## Roadmap and Challenges

### Roadmap

Our journey to revolutionize decentralized funding and initiative management includes the following key milestones:

1. **Platform Launch and Initial Deployment**

   - Launch the core platform with features such as staking, fund distribution, and beneficiary application modules.
   - Roll out the governance dashboard for transparency and real-time reporting.
   - Conduct comprehensive smart contract audits to ensure security and reliability.

2. **Community Growth and Ecosystem Development**

   - Expand the platform's user base through targeted marketing and community-building efforts.
   - Onboard early adopters, including donors and beneficiaries.
   - Establish strategic partnerships with NGOs, educational institutions, and other organizations.

3. **Advanced Features and Global Outreach**
   - Introduce advanced features such as dynamic yield optimization and impact measurement tools.
   - Expand globally, accommodating multi-currency staking and cross-border initiatives.
   - Scale the platform to support a larger number of projects and community-driven governance.

### Challenges

While our vision is ambitious, we recognize the following challenges and are prepared to address them:

1. **User Adoption**

   - Educating users on the benefits of decentralized funding and staking mechanisms remains a priority.
   - We aim to simplify the onboarding process to attract a broader audience.

2. **Regulatory Compliance**

   - Navigating global regulatory landscapes, including KYC/AML requirements, to ensure compliance and accessibility.

3. **Security and Trust**

   - Maintaining robust security protocols for smart contracts and user funds is critical to building trust.

4. **Sustainability**
   - Ensuring a sustainable balance between yield generation and fund distribution to maximize long-term impact.

## Demo

[Eduena App](https://eduena.netlify.app)

[Watch the Video Demonstration](https://youtu.be/rdNQPTu3Ioc)

### Note

The **Projects**, **Create Project**, and **Dashboard** pages are currently static and serve mock or demonstration purposes only. These pages are designed to showcase the intended user experience and visual layout of the platform. Please note that they do not yet contain full functionality, as we are still in the development phase. We are actively working on integrating these features, and they will be fully functional in upcoming platform releases. Thank you for your understanding as we continue to build and refine the platform.

### Screenshots

Here are some screenshots of the Eduena platform:

#### Deposit

![Deposit](screenshots/deposit.png)

#### Deposit Confirmed

![Deposit Confirmed](screenshots/deposit-confirmed.png)

#### Projects

![Projects](screenshots/projects.png)

#### Create Project

![Create Project](screenshots/create-project.png)

#### Claim Funds

![Claim Funds](screenshots/claim-funds.png)

#### Dashboard

![Dashboard](screenshots/dashboard.png)

#### Withdraw

![Withdraw](screenshots/withdraw.png)

#### Withdraw Confirmed

![Withdraw Confirmed](screenshots/withdraw-confirmed.png)

### Navigation

- **Endowment Fund Management**: [Endowment Fund](http://eduena.netlify.app/endowment-fund)
- **Claim Funds**: [Claim Funds](http://eduena.netlify.app/endowment-fund/claim-funds)
- **Projects**: [Projects](http://eduena.netlify.app/endowment-fund/projects)
- **Create Project**: [Create Project](http://eduena.netlify.app/endowment-fund/create-project)
- **Dashboard**: [Dashboard](http://eduena.netlify.app/endowment-fund/dashboard)

## Technical Details

### Smart Contract

The `Eduena` contract in [`contract/src/Eduena.sol`](contract/src/Eduena.sol)

#### Functions

- **deposit(uint256 amount)**: Allows users to deposit a specified amount of **USDe** tokens and it immediately staked to **sUSDe**. The equivalent amount of Eduena tokens (EDN) is minted and assigned to the user.
- **withdraw(uint256 shares)**: Allows users to withdraw a specified amount of Eduena tokens (EDN). The equivalent amount of **sUSDe** tokens is transferred back to the user.
- **distribute(address recipient, uint256 shares)**: Distributes a specified amount of yield to a recipient.
- **accrueYield()**: Updates the yield based on the current asset value in **USDe**.

#### Events

- **DepositAndStake(address indexed user, uint256 amount)**: Emitted when a deposit is made and staked.
- **Withdraw(address indexed recipient, uint256 amount)**: Emitted when a withdrawal is made.
- **Distribute(address indexed recipient, uint256 amount)**: Emitted when yield is distributed.
- **YieldAccrued(uint256 newAssetValueInUSDe, uint256 yield)**: Emitted when the yield is updated.

#### Errors

- **InsufficientBalance()**: Thrown when a user tries to withdraw more than their balance.
- **DepositAmountZero()**: Thrown when a deposit amount is zero.
- **ExceedsUnclaimedYield()**: Thrown when the amount exceeds the unclaimed yield.

#### Testing

The `EduenaTest` contract in [`contract/test/Eduena.t.sol`](contract/test/Eduena.t.sol) includes tests for the deposit and withdrawal functionalities.

##### Example Test Functions

```solidity
function testDepositAndWithdraw() public {
    // Test deposit and withdrawal functionality
}

function testAccrueYield() public {
    // Test yield accrual functionality
}
```

#### Setting Up Environment Variables

To run the tests, you need to set up [Alchemy account](https://www.alchemy.com/) and the following environment variables in a `.env` file:

```env
MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/account_key_xxx
FORK_BLOCK_NUMBER=21272472
```

Running the Tests
To run the tests using Foundry, use the following command:

```
forge test
```

#### Deployment

The Eduena contract is deployed on [Tenderly](https://tenderly.co/) for demo purposes.

#### Setting Up RPC for Virtual Testnet

To interact with the Eduena contract on the virtual testnet, you need to configure the RPC settings in your wallet or MetaMask.

#### MetaMask Configuration

1. Open MetaMask and go to the network dropdown at the top.
2. Select "Add Network" and fill in the following details:

   - **Network Name**: Tenderly
   - **New RPC URL**: `https://virtual.mainnet.rpc.tenderly.co/7f501e58-b80d-4397-9031-146391be0952`
   - **Chain ID**: `1` (or the appropriate chain ID for your testnet)
   - **Currency Symbol**: `ETH`
   - **Block Explorer URL**: (optional) `https://explorer.tenderly.co`

3. Click "Save" to add the network.

#### Wallet Configuration

If you are using a different wallet, refer to its documentation for adding a custom RPC network. Use the same details as provided above for MetaMask.

Once configured, you can connect your wallet to the Eduena testnet and interact with the deployed contract.

#### Fund account

Fund VETH for gas fee:

```
curl --location 'https://virtual.mainnet.rpc.tenderly.co/fad38b2e-0b26-4b16-b2c3-c24ac629af36' \
--header 'Content-Type: application/json' \
--data '{
  "jsonrpc": "2.0",
  "method": "tenderly_setBalance",
  "params": [["USER_WALLET_ADDRESS"], "0x152d02c7e14af6000000"]
}'
```

Fund your account with USDe for testing Eduena deposits. The first parameter is the USDe contract address, the second parameter is your wallet address, and the third parameter is a 32-byte hash representing the token amount in wei. The example below sets a balance of $100,000 USDe to the user's address.

```
curl --location 'https://virtual.mainnet.rpc.tenderly.co/fad38b2e-0b26-4b16-b2c3-c24ac629af36' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "tenderly_setErc20Balance",
    "params": [
        "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
        "USER_WALLET_ADDRESS",
        "0x152d02c7e14af6000000"
    ]
}'
```

#### Deploy smart contract

```
echo "
unknown_chain = { key = \"${TENDERLY_ACCESS_KEY}\", chain = 1, url = \"https://virtual.mainnet.rpc.tenderly.co/fad38b2e-0b26-4b16-b2c3-c24ac629af36\" }" >> foundry.toml

forge create Eduena \
--private-key $PRIVATE_KEY \
--rpc-url https://virtual.mainnet.rpc.tenderly.co/fad38b2e-0b26-4b16-b2c3-c24ac629af36 \
--etherscan-api-key $TENDERLY_ACCESS_KEY \
--verify \
--verifier-url https://virtual.mainnet.rpc.tenderly.co/fad38b2e-0b26-4b16-b2c3-c24ac629af36/verify/etherscan \
--constructor-args 0x4c9EDD5852cd905f086C759E8383e09bff1E68B3 0x9D39A5DE30e57443BfF2A8307A4256c8797A3497
```

### Frontend

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Wagmi, Viem, @rainbow-me/rainbowkit
- **UI Components**: @nextui-org/react, @headlessui/react, @heroicons/react
- **Smart Contract Integration**: USDe, sUSDe
- **Virtual TestNets**: [Tenderly](https://tenderly.co/)

### Teams

- Bobby Fiando Sadela
- Ardy Erdiyanto
