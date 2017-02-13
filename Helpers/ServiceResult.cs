using System;
using System.Collections;
using System.Collections.Generic;
public class ServiceResult {
    public ServiceResult()
    {
        Messages = new List<string>();
    }

    public object Data { get; set; }
    public bool Success { get; set; }
    public List<string> Messages { get; set; }
}