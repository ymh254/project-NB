import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';


const Profile = () => {
    const followerList = [{ nickname: '미노' }, { nickname: '노드' }, { nickname: '버드' }];
    const followingList = [{ nickname: '미노' }, { nickname: '노드' }, { nickname: '버드' }];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    )
};

export default Profile