using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet.Controllers
{
    [ApiController]
    [Route("/api")]
    public class ApiController : ControllerBase
    {

        [HttpGet]
        public String Get()
        {
            int vk = 0;
            for(int i=0;i<500;i++){
                for(int j=0;j<500;j++){
                    for(int k=0;k<50;k++){
                        vk = k;
                    }
                }
            }
            return "<span style=\"color: green\">Hello DotNet!</span>";
        }
    }
}
