import Image from 'next/image';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  styleClassName?: string;
  redirectUserPage?: boolean;
  nickname?: string;
}
export default function ProfileImage({
  src,
  alt = '프로필 이미지',
  size = 40,
  styleClassName = '',
  redirectUserPage = true,
  nickname = '',
}: ProfileImageProps) {
  const handleClickImage = () => {
    if (redirectUserPage) {
      window.location.href = `/users/${nickname}`;
    }
  };

  return (
    <div
      onClick={handleClickImage}
      className={`w-[${size}px] h-[${size}px] relative cursor-pointer`}
    >
      <Image
        src={src || '/default-profile-image.png'}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-full ${styleClassName}`}
      />
    </div>
  );
}
