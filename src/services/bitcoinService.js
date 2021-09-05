import axios from 'axios'
import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
    
}

const STORAGE_KEY = 'bitcoins'

// var gBitcoins = _loadBitcoins()


async function getRate(){
    try{
        const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        // console.log(res);
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

async function getMarketPrice(){
    try{
        const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        // console.log(res);
        return res.data
    }
    catch(err){
        console.log(err);
    }
}


async function getConfirmedTransactions() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true
        `)
        // console.log(res.data);
        return res.data
    } catch (err) {
        console.log(err);
    }
}