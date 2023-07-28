import React, { useState } from 'react';
import Display from './Display';
import fetch from 'node-fetch';


const Search = () => {
  const [skuId, setSkuId] = useState('');
  const [skuLocale, setSkuLocale] = useState('')
  //const [skus, setSkus] = useState<AxiosResponse | null | void>(null);
  const [skuEvents, setSkuEvent] = useState<SKUEVENT[]>([]);

  interface SKUEVENT {
    trace_id: string;
    team: string;
    application: string;
    name: string;

    timestamp: Date;
  }


  //3a816c7c-5526-4a40-af51-fb417eb3b6fc
  const apiUrl = 'https://snowball-api.ig1.xmerch-back-stg.xmerch-backend-stg-jeni.decathlon.io/api/v1/skus/' + skuLocale + '/' + skuId + '/events'
  //https://snowball-api.ig1.xmerch-back-stg.xmerch-backend-stg-jeni.decathlon.io/api/v1/skus/fr-BE/3a816c7c-5526-4a40-af51-fb417eb3b6fc/events
  //https://snowball-api.ig1.xmerch-back-stg.xmerch-backend-stg-jeni.decathlon.io/api/v1/skus/en-GB/9e0a472d-5651-4484-9369-45a4b2038561/events


  const handleOnClick = async () => {
    try {
      const response = await fetch(apiUrl, {})
      const data = await response.json();
      return setSkuEvent(data)
    } catch (error) {
      console.error(error);
    }
    setSkuId('');
    setSkuLocale('');
  };

  return (
    <>
      <div className='search_title'>
        <h1>Snow Ball
          <a href="https://wiki.decathlon.net/display/XCOM/xmerch-snowball+-+Connect+my+application+to+Snowball" target='_blank'>
            <img className="info" src="/information.png" alt="more infos" />
          </a>
        </h1>
      </div>
      <div className='input__wrapper'>
        <input
          className='sku_input'
          type='text'
          placeholder='sku id'
          value={skuId}
          onChange={(e) => setSkuId(e.target.value)}
        />
        <input
          className='local_input'
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
      <h1>{skuEvents && skuEvents.length > 0 ? '' : 'No record found'}</h1>
      <Display data={skuEvents} />
    </>
  );
};

export default Search;
