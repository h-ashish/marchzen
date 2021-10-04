import Profile from './ProfileForHoc';
import Comment from './CommentForHoc';
import HocUserInfo from './HocUserInfo';

export default function HocExample () {
    const NewProfile = HocUserInfo(Profile);
    const NewCommentForHoc = HocUserInfo(Comment);

    return (
        <div>
            <NewProfile/>
            <NewCommentForHoc/>
        </div>
    )
}