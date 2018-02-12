const getIdeas = () => ({
    
})

const createIdea = () => {
    return {
        type:"IDEAS_CREATE",
        payload:{
            id:"new",
            "body":"",
            "title":"",
            "created_date": new Date()
        }

    }
}

const updateIdea = (idea) => ({
    type:"IDEAS_EDIT",
    payload:idea
})

const deleteIdea = (idea) => ({
    type:"IDEAS_DELETE",
    payload:idea
})

export { getIdeas, createIdea, updateIdea, deleteIdea }