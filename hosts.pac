function FindProxyForURL(url, host) 
{ 
if (dnsDomainIs(host, "google.com")) 
{ 
return "PROXY 202.86.162.172:80"; 
} 
if (dnsDomainIs(host, ".blogspot.com")) 
{ 
return "PROXY 202.86.162.172:80"; 
}	
if (dnsDomainIs(host, "twitter.com")) 
{ 
return "PROXY 104.244.42.195:80"; 
}	
if (dnsDomainIs(host, "facebook.com")) 
{ 
return "PROXY 31.13.66.9:80"; 
}	
