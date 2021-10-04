export default function ForumForm({createForum}){
    return(
        <div>
            <form onSubmit={createForum}>
                <textarea rows="15" cols="20" name="input" placeholder="enter some text"/><br/>
                <label for="selectuser">Select a user:</label>
                <select name="selectuser">
                <option value="user1">User1</option>
                <option value="user2">User2</option>
                <option value="user3">User3</option>
                </select><br/>
                <button>submit</button>
            </form>
        </div>
    )
}