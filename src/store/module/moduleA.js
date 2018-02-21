const state = {
    curPerson: {},
    personList: [
        {
            id: '123456',
            name: 'Angular',
            sex: 1,
            age: '5'
        }, {
            id: '123457',
            name: 'vue',
            sex: 2,
            age: '3'
        }, {
            id: '123458',
            name: 'react',
            sex: 1,
            age: '8'
        }
    ]
}

const getter = {

}

const mutations = {
    setCurPerson(state, arg) {
        console.log(arg)
        state.curPerson = arg;
    },
    setPersonList(state, arg) {
        state.personList.push(arg);
    }
}

const actions = {
    
}

export default {
    state,
    getter,
    mutations,
    actions,
}