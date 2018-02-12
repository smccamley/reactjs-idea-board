import uuidv4 from 'uuid/v4'

const getIdeas = () => ({
    
})

const createIdea = () => {
    return {
        type:"IDEAS_CREATE",
        payload:{
            id: uuidv4(),
            "body":"",
            "title":"",
            "created_date": new Date()
        }

    }
}

const updateIdea = (idea, diff) => ({
    type:"IDEAS_EDIT",
    payload: Object.assign({...idea}, diff)
})

const deleteIdea = (idea) => ({
    type:"IDEAS_DELETE",
    payload:idea
})

export { getIdeas, createIdea, updateIdea, deleteIdea }