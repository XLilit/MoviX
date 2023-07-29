import React from 'react'
import { useSelector } from 'react-redux'

import './style.scss'

import PageContainer from '../../../components/pageContainer/PageContianer'
import Img from '../../../components/lazyLoadImage/Img'
import avatar from '../../../assets/images/avatar.png'

const Cast = ({data , loading}) => {
    const {url} = useSelector((state) => state.home)
    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        )
    }
  return (
    <div className='P-cast-section'>
        <PageContainer>
            <div className="P-secction-heading">Top Cast</div>
            {!loading ? (
                <div className="P-last-items G-flex">
                    {data && data.map((item)=> {
                        let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar
                        return (
                            <div className="P-list-item" key={item.id}>
                                <div className="P-profile-img">
                                    <Img src={imgUrl}/>
                                </div>
                                <div className="P-name">
                                    {item.name}
                                </div>
                                <div className="P-character">
                                    {item.character}
                                </div>
                            </div>
                        )
                    })}
                </div>
            ):(
                <div className="castSkeleton">
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                </div>
            )}
        </PageContainer>
    </div>
  )
}

export default Cast