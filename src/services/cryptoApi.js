import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '1bedd33a7bmsh412773e47664cc3p19bb9djsn252c65851c22'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ( { url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reduserPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            /* query: () => createRequest('/exchanges') */
            query: () => createRequest('/coins')
        })
    })
});



export const {
    useGetCryptosQuery,
} = cryptoApi;

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
// /*   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   }, */
//   headers: {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': '1bedd33a7bmsh412773e47664cc3p19bb9djsn252c65851c22'
//   }
// };
// /* 
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
//  */
