import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    archeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    flag: true,
    myCards: [],
    myArchetypes: [],
})