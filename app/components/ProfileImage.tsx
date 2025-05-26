// ProfileImage.tsx
import Image from 'next/image';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  styleClassName?: string;
}
export default function ProfileImage({
  src,
  alt = '프로필 이미지',
  size = 40,
  styleClassName = '',
}: ProfileImageProps) {
  return (
    <Image
      src={src || '/default-profile-image.png'}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${styleClassName}`}
    />
  );
}
