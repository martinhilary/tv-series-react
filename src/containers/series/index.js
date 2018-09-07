import React, {Component} from 'react' ;
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
class Series extends Component{
    state={
        series:[],
        // Keep track of what is in the input
        seriesName:' ',
        isFetching: false
      }
      componentDidMount() {
      }

      onSeriesInputChange = e => {
        this.setState ({seriesName:e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        //  fetch there is a promise(can chain then methods) and there is a need to chain it
        // function as the first arguement that allows you to access the response object
          .then(response => response.json())
          .then(json => this.setState({series:json, isFetching: false}))
          console.log(e)
          console.log(e.target.value)
      }

    render(){
        const{ series, seriesName, isFetching } = this.state
        return(
            <div>
                    <Intro message= "Here you can find all of your most loved series" />

                <div>
                     <input 
                     value={seriesName} 
                     type="text" 
                     onChange= {this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ' '
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ' '
                    &&
                    <p>No TV series has been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series;