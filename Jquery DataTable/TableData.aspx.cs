using Energizer.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace Jquery_DataTable
{
    public partial class TableData : System.Web.UI.Page
    {
        string _Heading;
        public string jsonObject
        {
            get { return _Heading; }
            set { _Heading = value; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            BindProjectGrid();
        }

        public void BindProjectGrid()
        {
            string connetionString = null;
            SqlConnection con;
            connetionString = "Data Source=USSTL-SQLDev.care.corp;Initial Catalog=DrugsDB;User ID=Go2MarketUser;Password=NewDay2014";
            con = new SqlConnection(connetionString);
            DataSet projectTasks;
            try
            {
                
                
                con.Open();
                string sqlCommand = "Select ID, DrugsName, Spec, SafeStock,Owner, OPTime from DrugsInfo";
                projectTasks = GetMyWorkSummary(sqlCommand, connetionString);
                if (projectTasks !=null )
                {
                    jsonObject = JsonConvert.SerializeObject(projectTasks, Formatting.Indented);
                }
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally { con.Close(); }
        }
     

        public static DataSet GetMyWorkSummary(string sqlCommand, string strConnectionString)
        {
            DataSet ds = new DataSet();
            using (SqlCommand cmd = new SqlCommand(
                sqlCommand, new SqlConnection(strConnectionString)))
            {
                cmd.Connection.Open();
                DataTable table = new DataTable();
                table.Load(cmd.ExecuteReader());
                ds.Tables.Add(table);
            }
            return ds;
        }

    }
}