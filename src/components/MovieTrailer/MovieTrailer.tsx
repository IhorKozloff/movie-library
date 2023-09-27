import { IconSVG } from 'Utils';
import { getTrailerKey } from 'API/moviesAPI';
import { ModalWindow } from 'components';
import { useState } from 'react';
import Media from 'react-media';

interface IProps {
    movieId: number;
};

export const MovieTrailer = ({movieId}:IProps) => {

    const [ playerStatus, setPlayerStatus ] = useState('off');

    const [ youTubeRef, setYouTubeRef ] = useState('');

    async function onMovieTrailerBtnClick () {

        const key = await getTrailerKey(movieId);

        if (key) {
            const youtubeLink = `https://www.youtube.com/embed/${key}?autoplay=1`;
    
            setYouTubeRef(youtubeLink);
            setPlayerStatus('on');
        }
    } 

    function onTrailerClose () {
        setPlayerStatus('off');
    }

    return (
        <>
            <div className="movieTrailer-wrapper">
                <button onClick={onMovieTrailerBtnClick}
                    className="hidden border-0 overflow-hidden absolute top-[190px] left-[150px] rounded-2xl bg-white opacity-30 cursor-pointer transition-opacity duration-500 hover:opacity-100 active:scale-90
                        [&_svg]:absolute [&_svg]:top-0 [&_svg]:left-[-8px] [&_svg]:translate-y-[-50px] [&_svg]:border-1 [&_svg]:border-solid [&_svg]:border-black
                        mobile:block mobile:w-[120px] mobile:h-[80px] mobile:top-[140px] mobile:left-[80px]
                        tablet:top-[190px] tablet:left-[100px]
                        desktop:top-[240px] desktop:left-[170px]
                    "
                >
                    <IconSVG id={'icon-YouTube'}></IconSVG>
                </button>
            </div>

            { playerStatus === 'on' && 
                <ModalWindow onClose={onTrailerClose}>
                    <Media queries={{
                        min: '(max-width: 299px)',
                        small: '(min-width: 300px) and (max-width: 767px)',
                        medium: '(min-width: 768px) and (max-width: 1023px)',
                        large: '(min-width: 1024px)'
                    }}>

                        {matches => (
                            <>
                                {matches.min && 
                                    <iframe 
                                        id="ytplayer" 
                                       
                                        width="175" 
                                        height="100"
                                        
                                        allowFullScreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                        title="min"
                                    />
                                }
                                {matches.small && 
                                    <iframe 
                                        id="ytplayer" 
                                        
                                        width="300" 
                                        height="200"
                                        
                                        allowFullScreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                        title="small"
                                    />
                                }

                                {matches.medium && 
                                    <iframe 
                                        id="ytplayer" 
                                        
                                        width="700" 
                                        height="500"
                                       
                                        allowFullScreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                        title="medium"
                                    />
                                }

                                {matches.large && 
                                    <iframe 
                                        id="ytplayer" 
                                        
                                        width="890" 
                                        height="600"
                                        
                                        allowFullScreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                        title="large"
                                    />
                                }
                            </>
                        )}
                    </Media>
                </ModalWindow>
            }
        </>
    );
};