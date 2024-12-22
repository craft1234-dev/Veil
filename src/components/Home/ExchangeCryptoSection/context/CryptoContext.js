import { createContext, useContext, useReducer } from 'react';

const CryptoContext = createContext(null);

const CryptoDispatchContext = createContext(null);

export function CryptoProvider({ children }) {
  const [state, dispatch] = useReducer(
    cryptoReducer,
    initialState
  );

  return (
    <CryptoContext.Provider value={state}>
      <CryptoDispatchContext.Provider value={dispatch}>
        {children}
      </CryptoDispatchContext.Provider>
    </CryptoContext.Provider>
  );
}

export function useCrypto() {
  return useContext(CryptoContext);
}

export function useCryptoDispatch() {
  return useContext(CryptoDispatchContext);
}

function cryptoReducer(state, action) {
  switch (action.type) {
    case 'change': {
      console.log("change reducer");
        const { name, shortName, icon, transactionType } = action.payload;
      return {...state, isModalOpen: !state.isModalOpen,[transactionType || state.transactionType]: {
        name, shortName, icon
      }, transactionType: transactionType || state.transactionType};
      }
    case 'selectCrypto': {
     return {...state, isModalOpen: !state.isModalOpen, transactionType: action.payload.transactionType != null ? action.payload.transactionType : state.transactionType}
    }
    case 'toggle': {
      return {...state, isModalOpen: !state.isModalOpen}
  }
    case 'swapCrypto': {
      let send = state.sendCrypto;
      let receive = state.receiveCrypto;
      return {...state,  sendCrypto: receive, receiveCrypto: send}
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = 
  {
    selectedCrypto: {
     name: "Bitcoin", shortName: "BTC", icon: "/assets/tokens/btc.svg" ,
  },
  sendCrypto: {
    name: "Bitcoin", shortName: "BTC", icon: "/assets/tokens/btc.svg" ,
  },
  receiveCrypto: { name: "Uniswap", shortName: "UNI", icon: "/assets/tokens/uni.svg" },
  isModalOpen: false,
  transactionType: "sendCrypto"
};
