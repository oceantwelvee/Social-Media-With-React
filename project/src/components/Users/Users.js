import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import *as axios from 'axios';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={style.userPhoto}
                />
              </NavLink>
            </div>

            <div>
              {u.followed ? (
                <button onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "f66bf0a6-7cff-4098-b780-a374da7c1ff6"
                          }
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });

                    
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {}, //если что-то не так пойдет , удаляем 3ий параметр!
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "f66bf0a6-7cff-4098-b780-a374da7c1ff6"
                          }
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name} </div>
              <div>{u.status} </div>
            </span>
            <span>
              <div>{"u.location.country"} </div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
