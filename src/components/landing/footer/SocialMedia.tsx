import {
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandGitlab,
	IconBrandInstagram,
	IconBrandYoutube,
} from '@tabler/icons-react';
import SocialNetwork from './SocialNetwork';

export default function SocialMedia() {
	return (
		<div className="flex">
			<SocialNetwork
				icone={<IconBrandYoutube />}
				url="https://www.youtube.com/"
			/>
			<SocialNetwork
				icone={<IconBrandInstagram />}
				url="https://www.instagram.com/"
			/>
			<SocialNetwork
				icone={<IconBrandFacebook />}
				url="https://www.facebook.com/"
			/>
		</div>
	);
}
