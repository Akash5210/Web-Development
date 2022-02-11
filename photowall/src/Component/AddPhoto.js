import React from 'react'

class AddPhoto extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);           //we have to bind the this of handleSubmit method
    }

    handleSubmit(event){
        event.preventDefault();             //this will remove the default refreshing of page by clicking submit 
        //console.log(event.target.elements.link.value);
        //console.log(event.target.elements.description.value);
        
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            description: description
        }
        if(imageLink && description){
            this.props.onAddPhoto(post)
        }
        //use to clear the input field
        event.target.elements.link.value = ""
        event.target.elements.description.value = ""
        {alert("Photo added successfully")}
    }

    render(){
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form1"> 
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Upload</button>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPhoto