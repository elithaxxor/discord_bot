
//import { restClient } from '@polygon.io/client-js';


const stock_apit = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=pnmVOrapMEyGBt2uOl2GBLKvM40CSjsD"




// const polygonAPI = new PolygonAPI(apiKey);



class PolygonAPI {
        constructor(apiKey) {
          this.apiKey = apiKey;
          this.baseURL = 'https://api.polygon.io';
          
        }
      
        async getStockPriceI(symbol) {
        try {
          const url = `${this.baseURL}/v2/aggs/ticker/${symbol}/prev`;
          const queryParams = {
            apiKey: this.apiKey,
          };
          const queryString = new URLSearchParams(queryParams).toString();
      
            const response = await fetch(`${url}?${queryString}`);
            const data = await response.json();
            if (data && data.results && data.results.length > 0) {
              return data.results[0].c; // Return the closing price
            }
            throw new Error('No data found');
          } catch (error) {
            console.error('Error fetching stock price:', error);
            throw error;
          }
        }
      
        async getStockPrices(symbols) {
          const url = `${this.baseURL}/v2/aggs/ticker/${symbols}/prev`;
          const queryParams = {
            apiKey: this.apiKey,
          };
          const queryString = new URLSearchParams(queryParams).toString();
      
          try {
            const response = await fetch(`${url}?${queryString}`);
            const data = await response.json();
            return data.results.map(result => result.c); // Return an array of closing prices
          } catch (error) {
            console.error('Error fetching stock prices:', error);
            throw error;
          }
        }
      }

      module.exports = PolygonAPI // 👈 Export class

      
      // Example usage
      
    //   polygonAPI.getStockPrice('AAPL').then(price => {
    //     console.log('AAPL price:', price);
    //   }).catch(error => {
    //     console.error('Error:', error);
    //   });
      
    //   polygonAPI.getStockPrices('AAPL,MSFT').then(prices => {
    //     console.log('AAPL,MSFT prices:', prices);
    //   }).catch(error => {
    //     console.error('Error:', error);
    //   });
 
