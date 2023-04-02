import {
  useEffect,
  useState
} from "react";
import PersonList from "./PersonList";
import Loading from "./Loading";

function App() {
  const persondata = [{
      surname: "Smith",
      name: "Emily",
      gender: "Female",
      age: 28
    },
    {
      surname: "Brown",
      name: "Oliver",
      gender: "Male",
      age: 35
    },
    {
      surname: "Garcia",
      name: "Sofia",
      gender: "Female",
      age: 41
    },
    {
      surname: "Martin",
      name: "Lucas",
      gender: "Male",
      age: 29
    },
    {
      surname: "White",
      name: "Emma",
      gender: "Female",
      age: 20
    },
    {
      surname: "Gonzalez",
      name: "Luis",
      gender: "Male",
      age: 28
    },
    {
      surname: "Davis",
      name: "Hannah",
      gender: "Female",
      age: 33
    },
    {
      surname: "Lopez",
      name: "Diego",
      gender: "Male",
      age: 27
    },
    {
      surname: "Lee",
      name: "Eun-Ji",
      gender: "Female",
      age: 31
    },
    {
      surname: "Nguyen",
      name: "Minh",
      gender: "Male",
      age: 22
    },
    {
      surname: "Doe",
      name: "John",
      gender: "Male",
      age: 23
    },
    {
      surname: "Suzanne",
      name: "Rain",
      gender: "Female",
      age: 12
    }
  ];

  const [loading, loadingUpdate] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => {
      loadingUpdate(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return ( <div className = "App" > {
      loading === true ? < Loading / > : < PersonList persondata = {
        persondata
      }
      /> }


      <
      /div>
    );
  }

  export default App;