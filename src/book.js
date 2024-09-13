import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const Mybook=()=>{
      let[bookname, pickName] = useState('');
      
      const booklist= useSelector(state=>state.Booklist);//fetch the data from store

      const dispatch = useDispatch();

      const save=()=>{
        let data={newbook:bookname, type:"savebook"};
         dispatch(data); //it send data to store in redux where book reducer will capture it 
        pickName("");
      }

      const delbook= (index) =>{
        let data={bookindex:index, type: "removebook"};
        dispatch(data);
      }

      return(
        <div className="container mt-4 bg-dark-subtle" id="a2">
            <div className="row">
                <div className="col-xl-12 mb-4">
                    <h3 className="text-center mb-5"> Manage Book : {booklist.length} </h3>
                    <p className="text-center">
                        Enter Full Name :   <input type="text" className="m-2"
                        onChange={obj=>pickName(obj.target.value)} value={bookname}/>
                        <button className="btn btn-outline-dark m-3" onClick={save}>Save</button>
                    </p>
                </div>
                {
                    booklist.map((name,index)=>{
                        return(
                            <div className="col-xl-2 mb-3 text-center" key={index}>
                                <p id="a1" className="p-3 border rounded shadow"><b>{name}</b>
                                <button onClick={obj=>delbook(index)} className="btn btn-outline-danger btn-sm m-1" >Delete</button></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Mybook;