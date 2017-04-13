<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="Default.master" CodeBehind="TableData.aspx.cs" Inherits="Jquery_DataTable.TableData" Title="Jquery Table" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TaskBarContentPlaceHolder" runat="Server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContentPlaceHolder" runat="Server">
    <script type="text/javascript">
        var dataset = <%=this.jsonObject%>;
        var tableHeader = [{
            'mData': 'ID',
            sDefaultContent: '',
        }, {
            'mData': 'DrugsName',
            sDefaultContent: '',
        }, {
            'mData': 'Spec',
            sDefaultContent: '',
        }, {
            'mData': 'SafeStock',
            sDefaultContent: '',
        }, {
            'mData': 'Owner',
            sDefaultContent: '',
        }, {
            'mData': 'OPTime',
            sDefaultContent: '',
        }];

        $(document).ready(function() {

            $('#DrugsData').DataTable({ 
                "datatype": 'json',
                "aaData": dataset,
                "bPaginate": true,
                "bLengthChange": false,
                "bFilter": true,
                "bSort": true,
                "bInfo": true,
                "bAutoWidth": true,
                "bStateSave": false,
                "iDisplayLength": 15,
                "aoColumns": tableHeader,
                "dom": 'Bfrtip',
                "columnDefs": [
                     {
                         targets:0,
                         render: function ( data, type, row, meta ) {
                             if(type === 'display'){
                                 data = '<a href="project.aspx?projectid=' + encodeURIComponent(data) + '">' + data + '</a>';
                             }
                             return data;
                         }
                     }
                ] ,
                "buttons": [
                       'copy', 'csv', 'excel', 'pdf', 'print'
                ]
        
            });
        });

    </script>

    <table id="DrugsData" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Sl No</th>
                <th>Drugs Name</th>
                <th>Specification</th>
                <th>Stock Qty</th>
                <th>Owner</th>
                <th>OP Time</th>
            </tr>
        </thead>
    </table>
</asp:Content>




