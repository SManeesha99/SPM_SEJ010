import React, { Component} from 'react';
import Header from "../Header/Header";
import '../Offers/CreateOffer.css';
import offerpng from '../Offers/offerpng.png';

class CreateOffer extends Component{
    render(){
        return(
            <div className='createoffer'>
                <Header/>
                <center>
            <div className='coArea'>
                <h2>Add Offers</h2>
                <div className='coui'>
                
                    <div className='coname'>
                    <label className='coffer'>Offer Title</label>
                        <input class="form-control" placeholder='Eneter here'></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Offer Discription</label>
                        <input class="form-control" placeholder='Eneter here'></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Discount Precentage</label>
                        <input type='number' class="form-control" placeholder='Eneter here'></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Discount Price</label>
                        <input type='number' class="form-control" placeholder='Eneter here'></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Closing date</label>
                        <input type='date' class="form-control" ></input>
                    </div>

                    

                    

                </div>

                <button class='btn btn-primary'>Add Offer</button>

                


            </div>
            </center>

            </div>
        );

    }
}

export default CreateOffer;