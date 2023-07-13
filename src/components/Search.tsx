import React, { useState } from 'react';
import { Data } from '../asset/Data';
import Display from './Display';
import axios, { AxiosResponse } from 'axios';
import { UUID } from 'crypto';

const Search = () => {
  const [skuId, setSkuId] = useState('');
  const [skuLocale, setSkuLocale] = useState('fr-FR')
  const [skus, setSkus] = useState<AxiosResponse | null | void>(null);

  interface event {
    trace_id: string;
    team: string;
    application: string;
    name: string;

    timestamp: Date;
  }

  //3a816c7c-5526-4a40-af51-fb417eb3b6fc
  const apiUrl = 'https://snowball-api.ig1.xmerch-back-stg.xmerch-backend-stg-jeni.decathlon.io/api/v1/skus/' + skuLocale + '/' + skuId + '/events'
  //               https://snowball-api.ig1.xmerch-back-stg.xmerch-backend-stg-jeni.decathlon.io/api/v1/skus/fr-BE/3a816c7c-5526-4a40-af51-fb417eb3b6fc/events


  const handleOnClick = async () => {
    try {
      const response = await axios.get(apiUrl);
      return setSkus(response)
    } catch (error) {
      console.error(error);
    }
    setSkuId('');
  };

  return (
    <>
      <div className='search_title'>
        <h1>Sku finder</h1>
      </div>
      <div className='input__wrapper'>
        <input
          type='text'
          placeholder='sku id'
          value={skuId}
          onChange={(e) => setSkuId(e.target.value)}
        />
        <input
          type='text'
          placeholder='Locale'
          value={skuLocale}
          onChange={(e) => setSkuLocale(e.target.value)}
        />
        <button
          disabled={!skuId || !skuLocale}
          onClick={handleOnClick}
        >
          Search
        </button>
      </div>
      <Display data={skus} />
    </>
  );
};

export default Search;
