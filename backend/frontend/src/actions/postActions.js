import { FETCH_POSTS,NEW_POST} from './types';
import { getProfileInfo } from './googleAuth';


export const fetchPosts = () => dispatch => {
        fetch('http://localhost:8080/getAllUsers')
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type: FETCH_POSTS,
            payload: posts
          })
        );
    };

        export const createPost = (postData) => dispatch => {
          fetch('http://localhost:8080/createUser',{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(postData)
    })
       .then(re => re.json())
       .then(post => dispatch({
         type: NEW_POST,
         payload: post
       }));

};


export async function login(req, res) {
  try {
    const code = req.body.code;
    const profile = await getProfileInfo(code);

    const user = {
      googleId: profile.sub,
      name: profile.name,
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      profilePic: profile.picture,
    };

    res.send({ user });
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
}

// // Google Login
// exports.googlelogin = (req, res) => {
//   const { idToken } = req.body;

//   client
//     .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
//     .then(response => {
//       // console.log('GOOGLE LOGIN RESPONSE',response)
//       const { email_verified, name, email } = response.payload;
//       if (email_verified) {
//         User.findOne({ email }).exec((err, user) => {
//           if (user) {
//             const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//               expiresIn: '7d'
//             });
//             const { _id, email, name, role } = user;
//             return res.json({
//               token,
//               user: { _id, email, name, role }
//             });
//           } else {
//             let password = email + process.env.JWT_SECRET;
//             user = new User({ name, email, password });
//             user.save((err, data) => {
//               if (err) {
//                 console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
//                 return res.status(400).json({
//                   error: 'User signup failed with google'
//                 });
//               }
//               const token = jwt.sign(
//                 { _id: data._id },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '7d' }
//               );
//               const { _id, email, name, role } = data;
//               return res.json({
//                 token,
//                 user: { _id, email, name, role }
//               });
//             });
//           }
//         });
//       } else {
//         return res.status(400).json({
//           error: 'Google login failed. Try again'
//         });
//       }
//     });
// };
    
