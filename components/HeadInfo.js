import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
    return(
            <Head>
                <title>{title}</title>
                <meta keyword={keyword}/>
                <meta contents={contents}/>
            </Head>
    )
}

HeadInfo.defaultProps = {
    title:'My blog',
    keyword:'Blog powered by Next Js',
    contents:'practice next js'
}

export default HeadInfo;