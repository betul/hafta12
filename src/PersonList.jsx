import Person from "./Person";

function PersonList(props) {
    const { persondata } = props;

    return (
        <div className="container">
            <div className="row">
                {persondata
                    ? persondata.map((person, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <Person person={person} />
                        </div>
                    ))
                    : null}
            </div>
        </div>
    );
}

export default PersonList;
