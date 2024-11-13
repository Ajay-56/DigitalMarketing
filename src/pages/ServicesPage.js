import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicesPage.css';
import { Box, Button, InputBase, Paper, Typography, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

const ServicesPage = () => {
    const [ser,setSer]=useState({title:"",description:""});
    const [serviceData,setServiceData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/item")
        .then((response)=>{
            setServiceData(response.data);
        })
    },[serviceData])

    

    const handleServ=(e)=>{
        const{name,value}=e.target;
        setSer({...ser,[name]:value})
    }

    const addService=(e)=>{
        axios.post("http://localhost:3000/item",ser)
        .then((response)=>{
            setServiceData([...serviceData],ser);
            setSer({title:"",description:""});

        })
    }
    const onDelete=(id)=>{
        axios.delete(`http://localhost:3000/item/${id}`)
        .then(()=>{
            setServiceData(serviceData.filter(item=>item.id!==id))
        })
    }

    return (
        <div className="services-page">
            <Navbar />
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Discover the wide range of services we offer to help your business succeed online.</p>
            </header>
            <Paper sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:10,width:"80%",minHeight:"50vh",backgroundColor:blue[400], padding:10}}>
                <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(0,0,0,0.4)",borderRadius:5,width:"60%",minHeight:"40vh"}}>
                    <Typography variant='h6' color={"white"}>SERVICE: </Typography>
                    <Paper sx={{display:"flex",justifyContent:"center",width:"40%",alignItems:"center"}}>
                        <InputBase value={ser.title} name="title" onChange={handleServ} sx={{display:"flex",justifyContent:"center",width:"90%",alignItems:"center"}}></InputBase>
                    </Paper>
                    <br/>
                    <Typography variant='h6' color={"white"}>DESCRIPTION: </Typography>
                    <Paper sx={{display:"flex",justifyContent:"center",width:"40%",alignItems:"center",minHeight:"10vh"}}>
                        <textarea value={ser.description} name="description" onChange={handleServ} style={{width:"100%",minHeight:"160px"}}/>
                    </Paper>
                    
                    <br/>
                    <Button variant='contained' onClick={addService}>ADD SERVICE</Button>
                    <br/>
                </Box>
            
            <div>
                <Box sx={{padding:5}}>
                <Typography variant="h4" component="h2"  color="white" gutterBottom>
                    Our Services
                </Typography>
                <ol>
                    {serviceData.map(item => (
                        <Paper key={item.id} sx={{ marginBottom: 2, padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body1">{item.description}</Typography>
                            </Box>
                            <IconButton onClick={() => onDelete(item.id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Paper>
                    ))}
                </ol>
                </Box>
            </div>
            </Paper>

            <Footer />
        </div>
    );
};

export default ServicesPage;



// const services = [
    //     {
    //         id: 0,
    //         title: "SEO Optimization",
    //         description: "With over 87% of buyers searching for products and services online, We deliver technical, off-page, and on-page SEO to clients across industries.SEO Optimization enhances your website's visibility on search engines like Google by improving its ranking in search results.Our approach ensures your site meets technical standards and delivers relevant content to users. By optimizing both content and structure, we help your business attract more qualified leads and increase online visibility. Let us boost your search engine rankings and elevate your digital presence.",
    //         image: image1
    //     },
    //     {
    //         id: 1,
    //         title: "Content Marketing",
    //         description: "Content Marketing drives engagement and conversions by creating and distributing valuable, relevant content tailored to your audience. From blog posts and infographics to videos and whitepapers, we develop content that educates, entertains, and informs. Our approach boosts brand authority, attracts organic traffic, and nurtures leads through the sales funnel. By aligning content with your business goals, we enhance customer relationships and support long-term growth. Let us help you craft a compelling narrative that resonates with your target audience..",
    //         image: image3
    //     },
    //     {
    //         id: 2,
    //         title: "Social Media Management",
    //         description: "Elevate your brand with our comprehensive Social Media Management services. We craft and execute tailored strategies to boost your online presence across major platforms like Facebook, Instagram, and LinkedIn. Our team handles content creation, post scheduling, and community engagement to keep your audience connected and engaged. We monitor performance metrics to optimize your social media impact and drive meaningful interactions. Let us help you enhance your visibility and build lasting relationships with your customers..",
    //         image: image2
    //     },
    //     {
    //         id: 3,
    //         title: "PPC(Advertising)",
    //         description: "Pay-per-click marketing is an advertising channel where marketers generate ad impressions on a search engine, website, or social media platform and are charged on a per-click basis versus per impression. The bid amount may affect placement, but the advertiser only pays when their ad is clicked by an online user.The most common pay-per-click ad format appears on search results pages of search engines like Google or Bing. Advertisers can place their brand, product, or service front and center in the form of an ad targeting a specific keyword or behavior.",
    //         image: image4
    //     }
    // ];