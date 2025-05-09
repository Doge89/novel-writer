import SignInSVG from '@/public/register_image.svg'
export default function SignIn() {
    return (
        <div className="w-full h-full flex flex-col flex-1 py-32 px-24 gap-4">
            <h2 className='font-bold text-2xl'>Create your own stories with your own words</h2>
            <p className='text-xl'>Delve into the realm of unknown stories to discover a whole new world. </p>
            <SignInSVG />
        </div>
    )
}