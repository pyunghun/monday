import ItemList from "./ItemList";

function Item({user}) {
    return (
        <div className="item">
            <h4>{ user.title }</h4>
            <hr/>
            <p>
                지역 : { user.venue }<br/>
                강좌명 : { user.subjectCategory }<br/>
                과목 : { user.subjectKeyword }<br/>
            </p>
        </div>
    );
}

export default Item;