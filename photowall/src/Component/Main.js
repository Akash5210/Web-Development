//Note: for working with react-router then first install the router using:  npm install react-router-dom@4.2.2
import React, { Component } from 'react';
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto';
import { Route } from 'react-router';

//Main is a parent component
//copied form the react course material (udemy)
class Main extends Component{
    constructor(){                                  //creating a constructor to work on state and binding i.e. 'this'
        super();
        this.state = {
            posts : []              //posts is an array object and the definition is stored in SimulateFetchFromDatabase() function
        };

        //binding of 'this' of the given method
        this.removePhoto = this.removePhoto.bind(this); //use to bind this of removePhoto method to the removePhoto method
        this.addPhoto = this.addPhoto.bind(this)
        console.log('constructor')
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat(postSubmitted)
        }))
    }


    //updating our UI using state
    //creating a common method for Photo file and Main file
    removePhoto(postRemoved){
        console.log(postRemoved.description);

        this.setState((state) => ({     //here this is not defined because it is being called from photo file so we have to define it in 'this.state' method
            posts: state.posts.filter(post => post!==postRemoved)
        }))
    }

    //Note: Everytime we fetch data from database then it should be inside componentDidMount()
    //builtin method of the class which will invoke in the component loading i.e. Constructor -> render `render with 0 elements i.e. empty page` -> componentdidmount -> re-render
    componentDidMount(){
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts: data
        })
        console.log('componentDidMount')
    }

    //this builtin method is envoked just before the DOM loded to the browser
    componentDidUpdate(){

    }

    render(){
        console.log('render')
        return (
            //sending props to the Title and Photowall components so props are basically arguments
            <div>
                <Route exact path="/" render={() => (           //for multiple components, put them inside div and use render method and for single component use component method only
                    <div>
                        <Title title = {'Photowall'}/>           
                        <Photowall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate={this.navigate} />
                    </div>
                )} />

                   
                <Route path="/AddPhoto" render={() => (
                    <AddPhoto onAddPhoto={this.addPhoto} />
                )} />                 
            </div>
            //if only one component without props then: <Route path="/AddPhoto" component={AddPhoto} />
        );
    }
}

//It will work as a initial database to fetch the inforamtion 
function SimulateFetchFromDatabase(){
    return [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }] 
}

export default Main