const web3Lib = require('web3');

const ABI = [{ "inputs": [{ "internalType": "address payable", "name": "_marketer", "type": "address" }, { "internalType": "address payable", "name": "_developer", "type": "address" }, { "internalType": "string", "name": "_imageHash", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "minter", "type": "address" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "fromAddress", "type": "address" }], "name": "PunkBidEntered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "fromAddress", "type": "address" }], "name": "PunkBidWithdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "fromAddress", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toAddress", "type": "address" }], "name": "PunkBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "punkIndex", "type": "uint256" }], "name": "PunkNoLongerForSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minValue", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "toAddress", "type": "address" }], "name": "PunkOffered", "type": "event" }, { "anonymous": false, "inputs": [], "name": "SaleBegins", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "TOKEN_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "internalType": "uint256", "name": "minPrice", "type": "uint256" }], "name": "acceptBidForPunk", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_approved", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }], "name": "buyPunk", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "cancelledOffers", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "contractSealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }], "name": "enterBidForPunk", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "ethBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "imageHash", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "numberOfNfts", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintsRemaining", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "_name", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "internalType": "uint256", "name": "minSalePriceInWei", "type": "uint256" }], "name": "offerPunkForSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "internalType": "uint256", "name": "minSalePriceInWei", "type": "uint256" }, { "internalType": "address", "name": "toAddress", "type": "address" }], "name": "offerPunkForSaleToAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_paused", "type": "bool" }], "name": "pauseMarket", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pendingWithdrawals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "publicSale", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "punkBids", "outputs": [{ "internalType": "bool", "name": "hasBid", "type": "bool" }, { "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "internalType": "address", "name": "bidder", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }], "name": "punkNoLongerForSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "punksOfferedForSale", "outputs": [{ "internalType": "bool", "name": "isForSale", "type": "bool" }, { "internalType": "uint256", "name": "punkIndex", "type": "uint256" }, { "internalType": "address", "name": "seller", "type": "address" }, { "internalType": "uint256", "name": "minValue", "type": "uint256" }, { "internalType": "address", "name": "onlySellTo", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "saleStartTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sealContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "bool", "name": "_approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "_interfaceID", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "_symbol", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "punkIndex", "type": "uint256" }], "name": "withdrawBidForPunk", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const contractAddress = '0x320f537da591da33Dd1A04dCB062434e3D176D3E';
// const contractAddress = '0x0874B1c697E5E23d5EfcC8491DEd74C75a6A0342';

class walletManager {

    // walletStatus
    // null     => not connected
    // false    => trying to connect
    // true     => connect
    walletStatus = false;

    promisify = (fun, params=[]) => {
        return new Promise((resolve, reject) => {
            fun(...params, (err, data) => {
                if (err !== null) reject(err);
                else resolve(data);
            });
        });
    }

    constructor() {
        if (window.web3) {
            this.tryToConnect();
        } else {
            this.walletStatus = null;
        }
    }

    async tryToConnect() {

        this.walletStatus = false;

        try {
            window.web3 = new web3Lib(window.web3.currentProvider);
            try {
                await window.ethereum.enable();
                let chain = await this.checkNetWork();
                if (chain == 137) {
                    await this.connectToContract();
                } else {
                    this.walletStatus = null;
                }
            } catch (e) {
                console.log(e);
            }
        } catch (e) {
            console.log(e);
            this.walletStatus = null;
        }
    }

    async connectToContract() {

        try {

            window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

            window.contract = new window.web3.eth.Contract(ABI, contractAddress);
            if (window.contract) {
                this.walletStatus = true;
            } else {
                this.walletStatus = null;
            }
            return true;

        } catch (e) {
            console.log(e);
            this.walletStatus = null;
        }

        this.walletStatus = null;
        return false;

    }

    async checkNetWork() {
        try {
            let id = await window.web3.eth.getChainId()
            return id;
        } catch (e) {
            return 0;
        }
    }

    connectToMetaMask() {
        if (window.web3) {
            window.web3 = new web3Lib(window.web3.currentProvider);
            window.ethereum.enable();
            return true;
        }
        return false;
    }

    disconnect() {
        console.log('set disconnect');
        this.walletStatus = null;
    }

    async getSelectedWallet(){


        let selectedWallet = "";
        if(window.web3) {
            try {
                selectedWallet = window.web3.currentProvider.selectedAddress;
            } catch (e) {
                console.log("1", e);
            }
            if (selectedWallet) {
                return selectedWallet;
            } else {
                try {
                    let getCurrentAccount = async () => {
                        const promise = this.promisify(window.web3.eth.getAccounts);
                        const accounts = await promise;
                        return accounts[0];
                    }

                    return getCurrentAccount();
                } catch (e) {
                    console.log(e);
                    return ""
                }
            }

        }

        return selectedWallet;




    }
}
export default new walletManager();