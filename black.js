var BLACK_HOLE = "PROXY 127.0.0.1:80";
var PROXY = "PROXY wehunter.geek-link.com:3128"
var DIRECT = "DIRECT"

function n(h, r, m) { return isInNet(h, r, m); }
function s(u, r) { return shExpMatch(u, r); }
function d(h, r){ return dnsDomainIs(h, r); }

function FindProxyForURL(url, host)
{
    var u = url.toLowerCase();
    var h = host.toLowerCase();

    
var domains = ["ad.api.3g.youku.com","statis.api.3g.youku.com","agn.aty.sohu.com","m.aty.sohu.com","irs01.com","admaster.com.cn","n.mark.letv.com","bs.da.hunantv.com","miaozhen.com","log.da.hunantv.com","log.v2.hunantv.com","v2.log.hunantv.com","x.da.hunantv.com","ad.api.3g.tudou.com"]
for(var i=0,len=domains.length;i<len;i++){ if(d(h,domains[i])){return BLACK_HOLE;} }
var nets = []
for(var i=0,len=nets.length;i<len;i++){ if(n(h,nets[i][0], nets[i][1] || '255.255.255.255' )){return BLACK_HOLE;} }
var urls = ["n.mark.letv.com/m3u8api","http://lives.l.qq.com/*&live=*"]
for(var i=0,len=urls.length;i<len;i++){ if(s(u,urls[i]))  {return BLACK_HOLE;} }

    return DIRECT;
}
