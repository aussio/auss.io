/* eslint-disable jsx-a11y/accessible-emoji */
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Gallery from 'react-photo-gallery';

export default function LandingPage() {
  const photos = [
    {
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/74357264_157527582314269_1985767718385555947_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=bWP0IdRGeO4AX_e07dc&oh=95cd87cf71bac956c1941582ec61b55d&oe=5EA5D06A',
      height: 1,
      width: 1,
    },
    {
      src: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/72279638_635114597016054_8022338059741005038_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=xuBGeoG1gHwAX_YPS6J&oh=dcf8bddcd623b9e0823e0c5ab0b08d09&oe=5EA861A4',
      height: 3,
      width: 4,
    },
    {
      src: 'https://instagram.forf1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/71179146_655030488353248_3727577869684656309_n.jpg?_nc_ht=instagram.forf1-4.fna.fbcdn.net&_nc_cat=104&_nc_ohc=n-ligQiinSgAX-o2a9P&oh=179e3dbb3812ceb02f98c8e8bb662098&oe=5EA6417A',
      height: 1,
      width: 1,
    },
    {
      src: 'https://instagram.forf1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/67444779_733918727052470_2172333319008567989_n.jpg?_nc_ht=instagram.forf1-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=eN4IEpXHwOAAX8IDb5U&oh=6cb43ddbce8b34b3be5301195c47ad83&oe=5EA601AF',
      height: 3,
      width: 4,
    },
    {
      src: 'https://instagram.forf1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/84635925_146271266836796_1228918487699630320_n.jpg?_nc_ht=instagram.forf1-4.fna.fbcdn.net&_nc_cat=108&_nc_ohc=uxEUUAaA92kAX9F_5GO&oh=536d87c88f12d8c88cffc0da0e54b722&oe=5EA6A1C7',
      height: 3,
      width: 4,
    },
    {
      src: 'https://instagram.forf1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/72782469_511080569497902_6349925593803409011_n.jpg?_nc_ht=instagram.forf1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=G_IJYl42sRsAX9VbMGO&oh=aba153e97fabac70124041ab9e53aaff&oe=5EA95B4D',
      height: 1,
      width: 1,
    },
    {
      src: 'https://instagram.forf1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/73470480_434915577438336_5593808348027530078_n.jpg?_nc_ht=instagram.forf1-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=3shJTuWPjLIAX_W9aa1&oh=eb327c31a21e06169a8f5d9d28250eca&oe=5EA8DF62',
      height: 3,
      width: 4,
    },
    {
      src: 'https://instagram.forf1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/69982057_513893182536326_2098076462139572815_n.jpg?_nc_ht=instagram.forf1-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=bZtUonx3J0AAX-1R_uO&oh=c461f02d0b1d19df6ccf78fe0305ff9f&oe=5EA6E5A1',
      height: 1,
      width: 1,
    },
    {
      src: 'https://instagram.forf1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/68680674_498900584219525_6184518193578282157_n.jpg?_nc_ht=instagram.forf1-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=UGA7beHth-8AX_Ua_Ln&oh=56159fda2796642fce17509dedba4bf7&oe=5EA8663E',
      height: 1,
      width: 1,
    },
    {
      src: 'https://scontent.forf1-4.fna.fbcdn.net/v/t1.0-9/p960x960/53862983_10205654886167485_699058459168997376_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=5bhSfKFa2uAAX-IoUjr&_nc_ht=scontent.forf1-4.fna&_nc_tp=6&oh=c6e29821dac3f4a562368692046bf756&oe=5EA5AF72',
      height: 1,
      width: 1,
    },
    {
      src: 'https://scontent.forf1-4.fna.fbcdn.net/v/t1.0-0/p206x206/65770483_10206062384514689_5805001716222918656_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=jRn-1xRG_o4AX_r9SoE&_nc_ht=scontent.forf1-4.fna&_nc_tp=6&oh=8b5cfac4c06701a237dd8cc0ee4b05f2&oe=5EA4D52E',
      height: 3,
      width: 4,
    },
    {
      src: 'https://scontent.forf1-4.fna.fbcdn.net/v/t1.0-9/15781289_10154908923197220_5484277410551581356_n.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=3CEIgF7fPAcAX_KArri&_nc_ht=scontent.forf1-4.fna&oh=03e7553cfc6334d19409a83737fa3ea1&oe=5EA53808',
      height: 3,
      width: 4,
    },
    {
      src: 'https://scontent.forf1-3.fna.fbcdn.net/v/t1.0-9/s960x960/62222291_10205965086962311_5603169821320544256_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=2BhZbolX-YsAX_G4MzJ&_nc_ht=scontent.forf1-3.fna&_nc_tp=7&oh=e6f9fe787d49eb8deb27eab9605892c4&oe=5EA5BAAC',
      height: 1,
      width: 1,
    },
    {
      src: 'https://scontent.forf1-3.fna.fbcdn.net/v/t1.0-0/p206x206/48429398_10205378519538492_2439885455303376896_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=bOW5dLIjuZYAX9N3J4H&_nc_ht=scontent.forf1-3.fna&_nc_tp=6&oh=8236f3ed081805e22219b0ee967025f4&oe=5EA1D9E6',
      height: 1,
      width: 1,
    },
    {
      src: 'https://scontent.forf1-3.fna.fbcdn.net/v/t1.0-9/p720x720/42096550_10107032000586418_7763282094804959232_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=tciD8Xh2c78AX8GmZGV&_nc_ht=scontent.forf1-3.fna&_nc_tp=6&oh=68e82daffe75217fc07b59e7d9d66a48&oe=5EA20364',
      height: 4,
      width: 3,
    },
  ];

  return (
    <div
      css={{
        position: 'relative',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',

        /*
        The following oddity is a quick way of solving how react-photo-gallery
          handles resizing the Gallery without learning how to manage the size
          more flexibly. This page is intended to be temporary, so let's use a
          quick and easy-to-understand fix. 👍
        */
        '@media(min-width: 1950px)': {
          margin: '0 10%',
        },
        '@media(min-width: 2400px)': {
          margin: '0 20%',
        },
      }}
    >
      <Global
        styles={{
          body: {
            backgroundColor: 'black',
          },
        }}
      />
      <p
        css={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'flex',
          alignItems: 'center', /** Y-axis align * */
          justifyContent: 'center', /** X-axis align * */
          fontSize: '4rem',
          background: 'rgba(0,0,0,.75)',
          color: 'white',
          textAlign: 'center',
          margin: 0,

          '@media(max-width: 1000px)': {
            alignItems: 'flex-start', /** Y-axis align * */
            fontSize: '2.5rem',
            paddingTop: '30vh',
          },
        }}
      >
        Future home of my personal website. 🚀
      </p>
      <Gallery photos={photos} />
    </div>
  );
}
