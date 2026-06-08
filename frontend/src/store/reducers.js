import { combineReducers } from 'redux';
import dataReducer from './dataSlice';
import aiGeneratedForSmartIntReducer from './aiGeneratedForSmartIntSlice';
import aiGeneratedForVisReducer from './aiGeneratedForVisSlice';

const rootReducer = combineReducers({
    data: dataReducer,
    aiGeneratedForSmartInt: aiGeneratedForSmartIntReducer,
    aiGeneratedForVis: aiGeneratedForVisReducer,
});

export default rootReducer;
